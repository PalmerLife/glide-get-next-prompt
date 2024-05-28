window.function = function(series, inputString) {
  const seriesArray = series.value.split(",");
  const trimmedSeriesArray = seriesArray.map(item => item.trim());
  const inputIndex = trimmedSeriesArray.indexOf(inputString.value.trim());

  if (inputIndex === -1 || inputIndex === trimmedSeriesArray.length - 1) {
    return "";
  }

  return trimmedSeriesArray[inputIndex + 1];
}
