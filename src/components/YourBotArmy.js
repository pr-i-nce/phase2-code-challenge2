import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove }) {
  const renderBotArmy = army.map((bot) => (
    <BotCard key={bot.id} bot={bot} onRemove={onRemove} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {renderBotArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
