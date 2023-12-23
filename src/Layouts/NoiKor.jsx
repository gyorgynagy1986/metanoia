import Sections from "@/components/Sections/Sections";
import { section_6 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/2.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'noiKor'
const effectDirection = 'right'

const NoiKor = withSectionProps(Sections, section, sectionPhoto, styleMody, effectDirection);

export default NoiKor;