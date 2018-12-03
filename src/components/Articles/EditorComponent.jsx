import React from 'react';
import Dante from 'Dante2';
import PropTypes from 'prop-types';
import { ImageBlockConfig } from 'Dante2/package/lib/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/lib/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/lib/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/lib/components/blocks/placeholder';
import config from '../../config';
import uploader from '../../utils/uploader.util';
import '../../assets/styles/EditorComponent.scss';

class EditorComponent extends React.Component {
  imageUpload = (image, state) => {
    uploader({
      image,
      progress: e => state.updateProgressBar(e),
      onSuccess: url => state.uploadCompleted(url),
    });
  };

  saveHandler = (context, content) => {
    let title;
    let imageUrl;
    let description;

    content.blocks.forEach((block) => {
      const { type } = block;
      if (type === 'unstyled' && description === undefined) {
        const { text } = block;
        if (text.length > config.MAX_DESCRIPTION_SIZE) {
          description = `${text.substr(0, config.MAX_DESCRIPTION_SIZE - 3)}...`;
        } else {
          description = text;
        }
      }

      const headers = ['header-one', 'header-two', 'header-three'];
      if (headers.includes(type) && title === undefined) {
        title = block.text;
      }

      if (type === 'image' && imageUrl === undefined) {
        imageUrl = block.data.url;
      }
    });

    /* Note: using context.editorContent is buggy in Dante2 and misses
     * a character when editing, therefore prefer using content */
    const { onChange } = this.props;
    onChange({
      title,
      description,
      image_url: imageUrl,
      body: JSON.stringify(content),
    });
  };

  render() {
    const {
      debug,
      spellcheck,
      content,
      saveInterval,
      readOnly,
    } = this.props;

    return (
      <Dante
        ref={this.editor}
        debug={debug}
        spellcheck={spellcheck}
        content={content}
        read_only={readOnly}
        data_storage={{
          url: config.UPLOAD_BASE_URL,
          method: 'PUT',
          save_handler: this.saveHandler,
          interval: saveInterval,
        }}
        widgets={[
          ImageBlockConfig({
            upload_handler: this.imageUpload,
            options: {
              upload_handler: this.imageUpload,
            },
          }),
          EmbedBlockConfig(),
          VideoBlockConfig(),
          PlaceholderBlockConfig(),
        ]}
      />
    );
  }
}

EditorComponent.propTypes = {
  debug: PropTypes.bool,
  spellcheck: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  readOnly: PropTypes.bool,
  saveInterval: PropTypes.number,
  onChange: PropTypes.func,
};

EditorComponent.defaultProps = {
  debug: false,
  spellcheck: true,
  content: '',
  readOnly: false,
  saveInterval: 100,
  onChange: () => {},
};

export default EditorComponent;
