import React from "react";

const ComicCard = ({ thumb, title }) => {
  // const { id, thumb, title } = props;
  return (
    <div className="col-16">
      <div className="comic-card">
        <img src={thumb} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ComicCard;
