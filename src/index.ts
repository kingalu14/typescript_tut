let sales: number = 123_456_789;
let course: string = "typescript";
let is_published = true;
let level;

function render(document: any) {
  console.log(document);
}

let m_array: number[] = [1, 2, 3];
let n_array: number[] = [];
let t_user: [number, string] = [1, "kassim"];
console.log(t_user[0]);
console.log(t_user[1]);

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022 || 2024) {
    return income * 1.2;
  }
  return income * 1.3;
}
console.log(mySize);

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.name = "kassim";

interface Employee {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "Moshi",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight);
}

let weight: number & string;
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resizable: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resizable: () => {},
};
//Literal (exact,specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = "cm" | "inc";

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}
greet(null);

type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
//option property access operator
console.log(customer?.birthday?.getFullYear());

//optiona element access operator
//customers?.[0]
//optional call
let log: any = null;
log?.("a");
log("a");
