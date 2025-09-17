export default function AnimalFilter() {

    const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];


    return (
        <ul>
            {animals.filter(animal => animal
                .startsWith('E'))
                .map(animal=>
                <li>
                    {animal}
                </li>)}
        </ul>
    )
};
