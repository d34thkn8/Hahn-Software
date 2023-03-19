import { InfoModel } from './info.interface';
export interface ProjectModel {
	id: number;
	description: string;
	infoList: InfoModel[];
}