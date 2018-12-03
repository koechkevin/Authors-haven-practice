import React, { Component } from 'react';
import { Collection } from 'react-materialize';
import Materialize from 'materialize-css';
import PropTypes from 'prop-types';
import '../../assets/styles/TagsComponent.scss';


class TagsComponent extends Component {
  componentDidMount() {
    const { onTagsChange, tags } = this.props;
    const data = (tags) || [];
    const tagsElement = document.getElementById('tags');
    this.instance = Materialize.Chips.init(
      tagsElement, {
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
        data,
        onChipAdd: () => {
          onTagsChange(this.getTagList());
        },
        onChipDelete: () => {
          onTagsChange(this.getTagList());
        },
      },
    );
  }

  getTagList = () => {
    const tags = [];
    this.instance.chipsData.forEach((chip) => {
      tags.push(chip.tag);
    });
    return tags;
  };

  render() {
    const { visible, onPublish } = this.props;
    return (
      <div id="publish-dropdown" className={visible ? 'show' : 'hide'}>
        <Collection className="publish-card">
          <p>Tags</p>
          <div className="chips chips-placeholder" id="tags" />
          { /* eslint-disable-next-line */ }
          <p onClick={onPublish} className="publish-btn teal-text">Publish </p>
        </Collection>
      </div>
    );
  }
}

TagsComponent.propTypes = {
  onTagsChange: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onPublish: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf({}),
};

TagsComponent.defaultProps = {
  tags: [],
};

export default TagsComponent;
