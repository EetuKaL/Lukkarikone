const form = document.querySelector("#group-form");
const groupNameInput = document.querySelector("#group-name");
const status = document.querySelector("#status");

browser.storage.sync
  .get("groupName")
  .then(({ groupName }) => {
    groupNameInput.value = groupName;
    groupNameInput.select();
  });

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const groupName = groupNameInput.value.trim();
  if (!groupName) {
    return;
  }

  await browser.storage.sync.set({ groupName });
  status.textContent = "Ryhmän nimi tallennettu.";
  setTimeout(() => window.close(), 2000);
});
