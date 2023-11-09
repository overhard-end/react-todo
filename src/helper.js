export const timeConverter = (seconds) => {
  const getText = (time, type) => `created ${time} ${type}  ago`;
  const time = Math.floor((Date.now() - seconds) / 1000);
  if (time > 86399) {
    return getText(Math.floor(time / 60 / 60 / 24), 'days');
  }
  if (time > 3599) {
    return getText(Math.floor(time / 60 / 60), 'hours');
  }
  if (time > 59) {
    return getText(Math.floor(time / 60), 'minute');
  }
  return getText(time, 'second');
};
