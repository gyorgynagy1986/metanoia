import Sections from "@/components/Sections/Sections";
import { section_2 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/_Layer_.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'ch'
const effectDirection = 'right'

const Csakra = withSectionProps(Sections, section, sectionPhoto, styleMody, effectDirection);

export default Csakra;
