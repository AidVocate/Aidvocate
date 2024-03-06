export default interface LegalNeedCardInterface {
  text: string,
  name: string,
  date: string,
  location: string,
  type: string,
  image: string,
  setOpen: (value: boolean) => void,
  setSelected: (value: LegalNeedCardInterface) => void,
}