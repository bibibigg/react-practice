export default function User({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 투자액</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>연간 투자액</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>예상수익</label>
          <input
            type="number"
            required
            value={userInput.expectReturn}
            onChange={(event) =>
              onChangeInput("expectReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>투자기간</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
