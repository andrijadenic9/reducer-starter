
// 1. NIJEDNO DUGME NE MOZE DA SE KORISTI DOK NE OTVORIMO ACCOUNT NA - OPEN ACCOUNT
// 2. OPEN ACCOUNT - DOBIJAMO 500 BALANCE
// 3. DEPOSIT - DOBIJAMO 150 OD BANKE NA RACUNU
// 4. WITHDRAW - POVLACIMO SA RACUNA 50 (TROSIMO NOVAC)
// 5. LOAN - UZIMAMO POZAJMICU OD 5000 I TO JE MOGUCE URADITI SAMO JEDNOM DOK NE VRATIMO LOAN
// 6. PAY LOAN - VRACAMO POZAJMICU
// 7. CLOSE ACC - ZATVARAMO ACCOUNT SAMO UKOLIKO NISMO U MINUSU SA BALANSOM I AKO NEMAMO LOAN

export default function App() {
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <p>
        <button>
          Open account
        </button>
      </p>
      <p>
        <button>
          Deposit 150
        </button>
      </p>
      <p>
        <button>
          Withdraw 50
        </button>
      </p>
      <p>
        <button>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button>
          Pay loan
        </button>
      </p>
      <p>
        <button>
          Close account
        </button>
      </p>
    </div>
  );
}
