"use client";


const compounding = (a,d) => {
  for(let i = 1; i<=d; i++) {
    a *= 2;
  }
  console.log(a)
}

compounding(1,30);

export default function Home() {
  return (
    <div>
      <label>Enter you investment amount</label>
      <br/>
      <input type='text'/>
      <br/>
      <label>Enter you days of investment</label>
      <br/>
      <input type='text'/>
      <button type='submit'>submit</button>
    </div>
  )
}
