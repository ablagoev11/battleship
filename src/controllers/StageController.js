const StageController = () => {
  const stages = [];
  let currentStage = 0;

  const changeStageUp = () => {
    if (stages.length - 1 !== currentStage) {
      currentStage += 1;
      changeStage();
    }
  };
  const changeStageDown = () => {
    if (currentStage !== 0) {
      currentStage -= 1;
      changeStage();
    }
  };

  const addStages = (func) => {
    stages.push(func);
  };
  const changeStage = () => {
    stages[currentStage]();
  };
  return { changeStageDown, changeStageUp, addStages, changeStage };
};
