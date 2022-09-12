import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {AbstractEntity} from '../common/abstract.entity';

@Entity()
export class Post extends AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 250, unique: true, nullable: false })
    title: string;

    @Column({ type: 'varchar', width: 250, nullable: false })
    content: string;

    @Column({ type: 'varchar', width: 250, nullable: false })
    image: string;

    @Column({ type: 'int' })
    userId: number;
}