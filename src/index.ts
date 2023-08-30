class School {
    directions: string[] = [];

    addDirection(direction: string): void {
        this.directions.push(direction);
    }
}

class Direction {
    _name: string;
    levels: number[] = [];


    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: number): void {
        this.levels.push(level);
    }
}

class Level {
    _name: string;
    _program: string;
    groups: any[] = [];

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: string): void {
        this.groups.push(group);
    }
}

class Group {
    _students: any[] = [];
    _directionName: string;
    _levelName: string;

    get students(): any[] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this._directionName = directionName;
        this._levelName = levelName;
    }

    addStudent(student: string): void {
        this._students.push(student);
    }

    showPerformance(): any[] {
        return this.students.sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );
    }
}

class Student {
    grades: any = {};
    attendance: boolean[] = [];
    _firstName: string;
    _lastName: string;
    _birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: boolean): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade: number =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present: boolean) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
