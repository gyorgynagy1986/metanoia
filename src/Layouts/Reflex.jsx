import Sections from "@/components/Sections/Sections";
import { section_3 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/Group_4.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'ref'

const Reflex = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default Reflex;
