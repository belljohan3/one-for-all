export type Role = {
    _id?: number;
    name: string;
}

export type User = {
    _id?: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    dateOfBirth: Date;
    roleId?: number; 
    createdAt?: Date;
    phone?: string;
    sexe: string;
}

export type Member = {
    _id: number;
    userId: number; 
    address: string;
    phoneNumber: string;
    status: string;
    createdAt: Date;
}

export type ContributionType = {
    _id: number;
    name: string;
    description?: string;
}

export type Contribution = {
    _id?: number;
    memberId?: number; 
    amount: number;
    paymentDate?: Date;
    paymentMethod?: string;
    status?: string;
    contributionTypeId?: number; 
}

export type Period = {
    _id: number;
    name: string;
    startDate: Date;
    endDate: Date;
}

export type MemberContribution =  {
    id: number;
    memberId: number; 
    contributionId: number; 
    periodId: number; 
}
