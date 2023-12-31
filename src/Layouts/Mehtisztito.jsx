import Sections from "@/components/Sections/Sections";
import { section_7 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/3.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'mhTisztito'
const effectDirection = 'left'


const Mehtisztito = withSectionProps(Sections, section, sectionPhoto, styleMody, effectDirection);

export default Mehtisztito;