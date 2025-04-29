import Item from "../pages/Home/item"
import { render,screen } from "@testing-library/react"

test("Gönderilen proplar doğru şekilde kullanılır",()=>{

 //test edilecek bileşeni renderla
 render(<Item color="text-blue-500" text="Toplam Test" value="256M"/>)
 
 //icon elementini al
 const icon=screen.getByTestId("icon")

 //color propu ile gelen değer iconun clasında varm?
 expect (icon).toHaveClass("text-blue-500")
 

 //? text içeriklerini kontrol ederken iki ihtimal var

 //1) önce elementi cağır ardından textine bak
const h2=screen.getByRole("heading");
expect (h2).toHaveTextContent("256M");

//2)elementi textine göre çagır
screen.getByText("Toplam Test");
});