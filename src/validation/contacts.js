import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

const phoneNumberPattern = /^[+]?[\d\s\-()]{7,20}$/;

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().pattern(phoneNumberPattern).required().messages({
    'string.pattern.base':
      'Phone number must be valid (digits, spaces, dashes, parentheses, optional +).',
  }),
  email: Joi.string()
    .min(3)
    .max(20)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .required()
    .default('personal'),
  photo: Joi.string(),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(phoneNumberPattern).messages({
    'string.pattern.base':
      'Phone number must be valid (digits, spaces, dashes, parentheses, optional +).',
  }),
  email: Joi.string()
    .min(3)
    .max(20)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .default('personal'),
  photo: Joi.string(),
});
