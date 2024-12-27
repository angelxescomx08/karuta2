import { cartasArray } from '@/app/data/cartas';
import { getCardById, getCardBySilaba } from '@/app/helpers/get-card';

describe('get-card', () => {
  describe('getCardById', () => {
    it('should return the card with the given id', async () => {
      expect(await getCardById('1')).toEqual(cartasArray[0]);
    });
    it('should return the first card if the id is not found', async () => {
      expect(await getCardById('999')).toEqual(cartasArray[0]);
    });
  });

  describe('getCardBySilaba', () => {
    it('should return the card with the given silaba', async () => {
      expect(await getCardBySilaba('Akino')).toEqual(cartasArray[0]);
    });
    it('should return the first card if the silaba is not found', async () => {
      expect(await getCardBySilaba('')).toEqual(cartasArray[0]);
    });
  });

  describe('getCardByNameOrId', () => {
    it('should return the card with the given silaba', async () => {
      expect(await getCardBySilaba('Akino')).toEqual(cartasArray[0]);
    });
    it('should return the card with the given id', async () => {
      expect(await getCardById('1')).toEqual(cartasArray[0]);
    });
    it('should return the first card if the silaba is not found', async () => {
      expect(await getCardBySilaba('')).toEqual(cartasArray[0]);
    });
    it('should return the first card if the id is not found', async () => {
      expect(await getCardById('999')).toEqual(cartasArray[0]);
    });
  });
});
