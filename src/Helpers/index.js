export function plus(x, y) {
    return x+y;
}

export function formatToolTag(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1 $2")
}

export function openTool(id) {
    document.getElementById(id).removeAttribute("data-role");
    bringToFront(id);
  }

  export function bringToFront(id) {
    document.getElementById(id).style.zIndex = 9999
    resetPositions(id)
  }
  
  export function resetPositions(id) {
    const allTools = document.getElementsByClassName("react-draggable")
    for(var i = 0; i < allTools.length; i++){
      if (allTools[i].id !== id) {
        allTools[i].style.zIndex = 1;
      }
   }
  }

  export function minimizeTool(id) {
    document.getElementById(id).setAttribute("data-role", "minimized");
  }

  export function createUUID() {
    // Creates unique identifier
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }