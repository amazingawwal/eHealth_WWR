type Student = {
  id: number;
  name: string;
  grade: string;
};

const students: Student[] = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "David", grade: "C" }
];

export default function StudentGroup() {

    const grouped = students.reduce<Record<string, Student[]>>((acc, student) => {
        if (!acc[student.grade]) {
            acc[student.grade] = [];
        }
        acc[student.grade].push(student);
        return acc;
    }, {});
        return (
            <div>
            {Object.entries(grouped).map(([grade, group]) => (
                <div key={grade}>
                <h3>Grade {grade}</h3>
                <ul>
                    {group.map((s) => (
                    <li key={s.id}>{s.name}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
  );
};
