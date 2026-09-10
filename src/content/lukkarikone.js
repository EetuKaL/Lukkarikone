(() => {
  const scheduleUrl = "https://lukkarit.centria.fi/#/schedule";
  const groupName = "ATIS26K";

  if (window.location.href !== scheduleUrl) {
    return;
  }

  const waitForElement = (findElement) =>
    new Promise((resolve) => {
      const find = () => {
        const element = findElement();

        if (element) {
          resolve(element);
          return;
        }

        setTimeout(find, 100);
      };

      find();
    });

  const initialize = async () => {
    const input = await waitForElement(() =>
      document.querySelector('input[placeholder^="Anna hakusana"]')
    );

    input.value = groupName;
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const searchGroupsButton = await waitForElement(() =>
      document.querySelector('input[type="radio"][id="option2"]')
    );
    searchGroupsButton.click();

    const searchButton = await waitForElement(() =>
      [...document.querySelectorAll("button")].find(
        (button) => button.textContent.trim() === "Hae"
      )
    );
    searchButton.click();

    const addButton = await waitForElement(() =>
      [...document.querySelectorAll("button")].find((button) =>
        button.textContent.trim().includes("Lisää")
      )
    );
    addButton.click();
  };

  initialize();
})();