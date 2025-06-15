let participantCount = 1; // Adjust based on how many are already in the HTML
const addButton = document.getElementById('add');
const form = document.querySelector('form');
const summary = document.getElementById('summary');

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="participant${count}-fname"> First Name<span>*</span></label>
        <input id="participant${count}-fname" type="text" name="participant${count}-fname" value="" required />
      </div>
      <div class="item activities">
        <label for="participant${count}-activity">Activity #<span>*</span></label>
        <input id="participant${count}-activity" type="text" name="participant${count}-activity" />
      </div>
      <div class="item">
        <label for="participant${count}-fee">Fee ($)<span>*</span></label>
        <input id="participant${count}-fee" type="number" name="participant${count}-fee" />
      </div>
      <div class="item">
        <label for="participant${count}-date">Desired Date <span>*</span></label>
        <input id="participant${count}-date" type="date" name="participant${count}-date" />
      </div>
      <div class="item">
        <label for="participant${count}-grade">Grade</label>
        <select id="participant${count}-grade" name="participant${count}-grade">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

addButton.addEventListener('click', () => {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function submitForm(event) {
  event.preventDefault();

  const total = totalFees();
  const name = document.getElementById('adult_name').value;

  form.style.display = "none";
  summary.innerHTML = successTemplate({
    name,
    count: participantCount,
    total
  });
}

form.addEventListener("submit", submitForm);

function totalFees() {
  let feeElements = document.querySelectorAll("[id^='participant'][id$='-fee']");
  feeElements = [...feeElements];

  const total = feeElements.reduce((sum, input) => {
    const fee = parseFloat(input.value) || 0;
    return sum + fee;
  }, 0);

  return total;
}

function successTemplate(info) {
  return `
    <h2>Thank you ${info.name} for registering.</h2>
    <p>You have registered ${info.count} participant(s) and owe $${info.total} in Fees.</p>
  `;
}
