import { helpers, minLength, required } from '@vuelidate/validators';

export const required$ = helpers.withMessage('Обязательное поле', required);

export const minLength$ = (min: number) =>
	helpers.withMessage(`Минимальная длина ${min}`, minLength(min));
