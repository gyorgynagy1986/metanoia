import Sections from "@/components/Sections/Sections";
import { section_5 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/_Layer_.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'mh'

const Mehregeneralo = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default Mehregeneralo;