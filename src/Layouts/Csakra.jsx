import Sections from "@/components/Sections/Sections";
import { section_2 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/_Layer_.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'ch'

const Csakra = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default Csakra;
