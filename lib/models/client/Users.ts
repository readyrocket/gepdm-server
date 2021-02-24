import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(`users`)
class Users {
	@PrimaryGeneratedColumn({ type: `uuid` })
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	privacy_policy: boolean;

	@CreateDateColumn({ type: `timestamp`, name: `createdAt` })
	createdAt: Date;
}

export { Users };
