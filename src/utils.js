export const createScript = (zone_id) => {
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = "https://api.lincx.com/ad";
  script.setAttribute("data-zone-id", zone_id);
  return script;
};
