export const createScript = (zone_id, dataAttribute = null, dataValue = null) => {
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = "https://api.lincx.com/load";
  script.setAttribute("data-zone-id", zone_id);
  if(dataAttribute && dataValue){
    script.setAttribute(dataAttribute, dataValue);
  }
  return script;
};
