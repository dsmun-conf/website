window.addEventListener('load', () => {
    const addDelegateButton = document.querySelector('.add-delegate');

    addDelegateButton.addEventListener('click', () => {
        const randomString = Math.random().toString(16).substring(2, 8);
        addDelegateButton.insertAdjacentHTML('beforebegin', eachDelegateInfo(randomString));

        addDeleteDelegateEventListeners('.delete-delegate:last-child');
    });

    addDeleteDelegateEventListeners('.delete-delegate');
});

function addDeleteDelegateEventListeners(selector) {
    const deleteDelegateButtons = document.querySelectorAll(selector);

    for (const deleteDelegateButton of deleteDelegateButtons) {
        deleteDelegateButton.addEventListener('click', () => {
            deleteDelegateButton.parentElement.remove();
        });
    }
}

function eachDelegateInfo(randomString) {
    return `
<fieldset class="each-delegate-info">
    <label>Delegate name
        <input type="text" name="delegate-${randomString}-name" placeholder="John Doe" required>
    </label>
    <fieldset class="radio-buttons">
        <legend>Gender</legend>
        <label>Male
            <input type="radio" name="delegate-${randomString}-gender" value="male" required>
        </label>
        <label>Female
            <input type="radio" name="delegate-${randomString}-gender" value="female" required>
        </label>
        <label>Other
            <input type="radio" name="delegate-${randomString}-gender" value="other" required>
        </label>
    </fieldset>
    <fieldset class="radio-buttons">
        <legend>Meal Preference</legend>
        <label>Vegetarian
            <input type="radio" name="delegate-${randomString}-meal-preference" value="vegetarian" required>
        </label>
        <label>Non-Vegetarian
            <input type="radio" name="delegate-${randomString}-meal-preference" value="non-vegetarian" required>
        </label>
    </fieldset>
    <label>Medical history, needs or complications
        <textarea name="delegate-${randomString}-medical-history" rows="2"></textarea>
    </label>
    <button class="delete-delegate" type="button">Delete this delegate</button>
</fieldset>
    `;
}
