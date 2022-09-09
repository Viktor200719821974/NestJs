import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {AbstractEntity} from '../common/abstract.entity';

interface IUser {
    id: number;
    email: string;
    password: string;
    city: string;
    status: boolean;
}
@Entity()
export class User extends AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 250, unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', width: 250, nullable: false })
    password: string;

    @Column({ type: 'varchar', width: 250, nullable: false })
    city: string;

    @Column({ type: 'boolean', default: false })
    status: boolean;
}