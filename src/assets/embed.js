(function () {
    const WIDGET_URL = "https://widget-nine-amber.vercel.app/"; // Your hosted widget URL
  
    // Check if the widget is already added
    if (document.getElementById("angular-widget")) {
      console.warn("Widget already embedded.");
      return;
    }
  
    // Create a container div for the widget
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "angular-widget";
    widgetContainer.style.position = "fixed";
    widgetContainer.style.bottom = "20px";
    widgetContainer.style.right = "20px";
    widgetContainer.style.width = "300px";
    widgetContainer.style.height = "400px";
    widgetContainer.style.zIndex = "10000";
    document.body.appendChild(widgetContainer);
  
    // Create and append an iframe to the container
    const iframe = document.createElement("iframe");
    iframe.src = WIDGET_URL;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "8px";
    widgetContainer.appendChild(iframe);
  })();
  