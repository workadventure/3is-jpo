/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
  console.log('Scripting API ready');
  console.log('Player tags: ',WA.player.tags)
  if (WA.player.tags.includes("admin")) {
      WA.player.setOutlineColor(48, 48, 47);
  }
  WA.room.onEnterLayer("auditorium-zone").subscribe(() => {
    WA.room.hideLayer("auditorium-roof");
  });
  WA.room.onLeaveLayer("auditorium-zone").subscribe(() => {
    WA.room.showLayer("auditorium-roof");
  });

  WA.room.area.onEnter("auditorium-focus").subscribe(() => {
    WA.room.hideLayer("auditorium-furniture-bg");
    WA.room.hideLayer("auditorium-furniture-fg");
    WA.room.hideLayer("auditorium-wall");
  });
  WA.room.area.onLeave("auditorium-focus").subscribe(() => {
    WA.room.showLayer("auditorium-furniture-bg");
    WA.room.showLayer("auditorium-furniture-fg");
    WA.room.showLayer("auditorium-wall");
  });
}).catch(e => console.error(e));

export {};
