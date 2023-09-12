type BudgetObjectType = {
  debit: number;
  credit: number;
};

enum BudgetTypeEnum {
  Debit = 'debit',
  Credit = 'credit',
}

type AllTypesOfEmployees = Employee | PreHireEmployee;

type EmployeeStatus = 'Active' | 'Inactive' | 'Unpaid leave';

type PaymentInfoType = {
  card: number;
  expirationDate: string;
  cvv: number;
};

class PreHireEmployee {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
  bankAccount: string;

  _balance: number = 0;
  constructor(id: number, firstName: string, lastName: string, salary: number, bankAccount: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.bankAccount = bankAccount;
  }

  updateBalance(amount: number, bankAccount: string): void {
    if (bankAccount) {
      this._balance += amount;
    }
  }
}

class Employee {
  id: number;
  firstName: string;
  lastName: string;
  paymentInfo: PaymentInfoType | null;
  salary: number;
  status: EmployeeStatus;
  department: Department | null;
  balance: number = 0;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    paymentInfo: PaymentInfoType,
    salary: number,
    status: EmployeeStatus,
    department: Department | null
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.paymentInfo = paymentInfo;
    this.salary = salary;
    this.status = status;
    this.department = department;
  }

  updateBalance(amount: number, paymentInfo: PaymentInfoType | null): void {
    if (paymentInfo) {
      this.balance += amount;
    }
  }
}

class Department {
  _id: number;
  _name: string;
  _domain: string;
  _employees: Employee[] = [];
  _pre_hire_employees: PreHireEmployee[] = [];
  _budget: BudgetObjectType = {
    debit: 0,
    credit: 0,
  };

  get employees(): Employee[] {
    return this._employees;
  }

  constructor(id: number, name: string, domain: string) {
    this._id = id;
    this._name = name;
    this._domain = domain;
  }

  addBudget(amount: number, type: BudgetTypeEnum): void {
    if (type === BudgetTypeEnum.Debit) {
      this._budget.debit += amount;
    }
    if (type === BudgetTypeEnum.Credit) {
      this._budget.credit += amount;
    }
  }

  removeBudget(amount: number, type: BudgetTypeEnum): void {
    if (type === BudgetTypeEnum.Debit) {
      this._budget.debit += amount;
    }
    if (type === BudgetTypeEnum.Credit) {
      this._budget.credit += amount;
    }
  }

  addEmployee(employee: AllTypesOfEmployees): void {
    if (employee instanceof Employee) {
      this._employees = [...this._employees, employee];
    }

    if (employee instanceof PreHireEmployee) {
      this._pre_hire_employees = [...this._pre_hire_employees, employee];
    }

    this.addBudget(employee.salary, BudgetTypeEnum.Debit);
  }

  movePreHireEmployeeToEmployees(
    preHireEmployee: PreHireEmployee,
    paymentInfo: PaymentInfoType,
    status: EmployeeStatus,
    department: Department
  ): void {
    const { id, firstName, lastName, salary } = preHireEmployee;
    this._employees = [
      ...this._employees,
      new Employee(id, firstName, lastName, paymentInfo, salary, status, department),
    ];
  }
}

class AccountingDepartment extends Department {
  _balance: number;

  constructor(id: number, balance: number) {
    super(id, 'Accounting', 'Finance');
    this._balance = balance;
  }

  paySalaries(searchingEmployee: AllTypesOfEmployees): void {
    if (searchingEmployee instanceof Employee) {
      this._employees.forEach(employee => {
        if (employee.status === 'Active') {
          this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
          if (employee.id === searchingEmployee.id) {
            employee.updateBalance(employee.salary, employee.paymentInfo);
          }
        }
      });
    }
    if (searchingEmployee instanceof PreHireEmployee) {
      this._pre_hire_employees.forEach(employee => {
        this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
        if (employee.id === searchingEmployee.id) {
          employee.updateBalance(employee.salary, employee.bankAccount);
        }
      });
    }
  }
}

class Company {
  _name: string;
  _departments: Department[] = [];
  _employees: Employee[] = [];
  _pre_hire_employees: PreHireEmployee[] = [];

  get departments(): Department[] {
    return this._departments;
  }

  get employees(): Employee[] {
    return this._departments.reduce((employees: Employee[], department: Department) => {
      return employees.concat(department._employees);
    }, []);
  }

  get preHireEmployees(): PreHireEmployee[] {
    return this._departments.reduce((preHireEmployees: PreHireEmployee[], department: Department) => {
      return preHireEmployees.concat(department._pre_hire_employees);
    }, []);
  }

  constructor(name: string) {
    this._name = name;
  }

  addDepartment(department: Department): void {
    this._departments = [...this._departments, department];
  }

  removeDepartment(id: number): void {
    this._departments = this._departments.filter(department => department._id !== id);
  }
}
