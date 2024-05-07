import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBotId, setSelectedBotId] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  useEffect(() => {
    const handleDelete = (botId) => {
      fetch(`http://localhost:8002/bots/${botId}`, {
        method: 'DELETE'
      })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
      });
    };

    if (selectedBotId) {
      handleDelete(selectedBotId);
    }

  }, [selectedBotId]); 

  const handleEnlist = (bot) => {
    if (!army.some(existingBot => existingBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (botToRemove) => {
    setArmy(army.filter(bot => bot.id !== botToRemove.id));
  };

  const handleSelectBot = (botId) => {
    setSelectedBotId(botId);
  };

  const handleDelete = (botId) => {
    setSelectedBotId(botId);
  };

  return (
    <div>
      <YourBotArmy army={army} onRemove={handleRelease} />
      <BotCollection bots={bots} onEnlist={handleEnlist} onSelectBot={handleSelectBot} onDelete={handleDelete} />
    </div>
  );
}

export default BotsPage;
