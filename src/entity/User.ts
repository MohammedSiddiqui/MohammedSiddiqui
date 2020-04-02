import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    public lolFunc = () => {
        console.log('Oh shit.');
        return 'UMMMMM';
    }

    public kiyaHai = async (someParam: number) => {
        console.log('kiya Hai.');
        console.log(someParam);
        return Promise.resolve('KIYA HAAIII');
    }

}
