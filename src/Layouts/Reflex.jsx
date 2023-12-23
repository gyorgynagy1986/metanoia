import Sections from "@/components/Sections/Sections";
import { section_3 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/Group_4.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'ref'
const effectDirection = 'left'


const Reflex = withSectionProps(Sections, section, sectionPhoto, styleMody, effectDirection);

export default Reflex;
