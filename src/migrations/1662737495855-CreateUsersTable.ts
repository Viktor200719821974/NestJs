// import {getRepository, MigrationInterface, QueryRunner, Repository, Table} from 'typeorm'
// import {User} from '../users/users.entity';
//
// export class CreateUsersTable1662737495855 implements MigrationInterface {
//     private repository: Repository<User>
//
//     constructor() {
//         this.repository = getRepository(User);
//     }
//
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: this.repository.metadata.tableName,
//                 columns: [
//                     {
//                         name: 'id',
//                         type: 'int',
//                         isPrimary: true,
//                         isGenerated: true,
//                         generationStrategy: 'increment',
//                     },
//                     {
//                         name: 'email',
//                         type: 'varchar',
//                         isUnique: true,
//                         isNullable: false,
//                         width: 250,
//                     },
//                     {
//                         name: 'password',
//                         type: 'varchar',
//                         isNullable: false,
//                         width: 250,
//                     },
//                     {
//                         name: 'city',
//                         type: 'varchar',
//                         isNullable: false,
//                         width: 250,
//                     },
//                     {
//                         name: 'status',
//                         type: 'boolean',
//                         default: false,
//                     },
//                     {
//                         name: 'createdAt',
//                         type: 'bigint',
//                         default: Date.now(),
//                     },
//                     {
//                         name: 'updatedAt',
//                         type: 'bigint',
//                         default: Date.now(),
//                     }
//                 ]
//             })
//         )
//     }
//
//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable(this.repository.metadata.tableName);
//     }
//
// }
