import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const tableBody = document.querySelector("#parts tbody");

const data = [
  {
    aircraft: "GLOBAL 7500",
    engine: 52,
    wheel: 9,
    wing: 12
  },
  {
    aircraft: "GLOBAL 5500",
    engine: 225,
    wheel: 28,
    wing: 42
  },
  {
    aircraft: "CHALLENGER 350",
    engine: 82,
    wheel: 19,
    wing: 17
  },
  {
    aircraft: "LEARJET 45J",
    engine: 0,
    wheel: 298,
    wing: 10
  }
];

function populateTable() {
  data.forEach((entry) => {
    const tableRow = `
      <tr>
        <td>
          ${entry.aircraft}
        </td>
        <td>
          ${entry.engine}
        </td>
        <td>
          ${entry.wheel}
        </td>
        <td>
          ${entry.wing}
        </td>
      </tr>
    `;

    if (tableBody) tableBody.insertAdjacentHTML("beforeend", tableRow);
  });
}

populateTable();
