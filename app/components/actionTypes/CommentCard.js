import React, { PropTypes } from 'react';
import getTrelloImageUrl from '../../helpers/getTrelloAvatarUrl';

const propTypes = {
  author: PropTypes.shape({
    avatarHash: PropTypes.string,
    fullName: PropTypes.string,
  }),
  card: PropTypes.shape({
    name: PropTypes.string,
  }),
  board: PropTypes.shape({
    name: PropTypes.string,
    shortLink: PropTypes.string,
  }),
  text: PropTypes.string,
  date: PropTypes.string,
};

const CommentCard = (props) => {
  const { author, card, text, date, board } = props;
  const { avatarHash, fullName } = author;

  return (
    <li className="collection-item avatar">
      <img
        src={getTrelloImageUrl(avatarHash)}
        alt="avatar" className="circle"
      />
      <span className="title">
        <span>{ fullName }</span>&nbsp;
        on <u>{ card.name }:</u>
      </span>
      <blockquote>{ text }</blockquote>
      <small>{ date } - on board&nbsp;
        <a target="_blank" rel="noopener noreferrer" href={`https://trello.com/b/${board.shortLink}`}>
          { board.name }
        </a>
      </small>
    </li>
  );
};

CommentCard.propTypes = propTypes;

export default CommentCard;
