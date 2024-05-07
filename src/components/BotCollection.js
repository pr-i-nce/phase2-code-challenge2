import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist, onSelectBot, onDelete }) {
  const handleDelete = (botId) => {
    onDelete(botId);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onSelect={onSelectBot}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
