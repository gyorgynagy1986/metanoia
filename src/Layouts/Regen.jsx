import Sections from "@/components/Sections/Sections";
import { section_5 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/1.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'mh'
const effectDirection = 'left'

const Mehregeneralo = withSectionProps(Sections, section, sectionPhoto, styleMody, effectDirection);

export default Mehregeneralo;