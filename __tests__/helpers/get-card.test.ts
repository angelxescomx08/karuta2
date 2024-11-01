import { getCardById, getCardBySilaba } from "@/app/helpers/get-card"
import { cartasArray } from "@/app/data/cartas"

describe("get-card",()=>{

  describe("getCardById",()=>{
    it("should return the card with the given id",()=>{
      expect(getCardById("1")).toEqual(cartasArray[0])
    })
    it("should return the first card if the id is not found",()=>{
      expect(getCardById("999")).toEqual(cartasArray[0])
    })
  })

  describe("getCardBySilaba",()=>{
    it("should return the card with the given silaba",()=>{
      expect(getCardBySilaba("Akino")).toEqual(cartasArray[0])
    })
    it("should return the first card if the silaba is not found",()=>{
      expect(getCardBySilaba("")).toEqual(cartasArray[0])
    })
  })

  describe("getCardByNameOrId",()=>{
    it("should return the card with the given silaba",()=>{
      expect(getCardBySilaba("Akino")).toEqual(cartasArray[0])
    })
    it("should return the card with the given id",()=>{
      expect(getCardById("1")).toEqual(cartasArray[0])
    })
    it("should return the first card if the silaba is not found",()=>{
      expect(getCardBySilaba("")).toEqual(cartasArray[0])
    })
    it("should return the first card if the id is not found",()=>{
      expect(getCardById("999")).toEqual(cartasArray[0])
    })
  })
})