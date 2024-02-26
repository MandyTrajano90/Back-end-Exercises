class Student {
  private _name: string;
  private _enrollment: string;
  private _examsGrades: number[] = Array();
  private _assignmentsGrades: number[] = Array();

  constructor(name: string, enrollment: string, exames: number[], assignments: number[]) {
    this._name = name;
    this._enrollment = enrollment;
    this.examsGrades = exames;
    this.assignmentsGrades = assignments;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('The number of exams must be 4');
    }
    this._examsGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error('The number of assignments must be 2');
    }
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((acc, curr) => acc += curr);
  }

  averageGrades(): number {
    return Math.round(this.sumGrades() / this._examsGrades.length + this._assignmentsGrades.length);
  }
}

const student1 = new Student('João', '12345', [10, 9, 8, 6], [10, 7]);
console.log(student1);
console.log('Soma das notas: ', student1.sumGrades());
console.log('Média das notas: ', student1.averageGrades());

const student2 = new Student('Maria', '54321', [10, 8, 5, 8], [9, 7]);
console.log(student2);
console.log('Soma das notas: ', student2.sumGrades());
console.log('Média das notas: ', student2.averageGrades());