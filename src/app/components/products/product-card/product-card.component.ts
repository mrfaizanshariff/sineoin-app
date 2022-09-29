import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: any;
  @Input() aromaChem: boolean = true;
  searchText: any = '';
  specs: any = [
    {
      chemicalName: '2-Methyl-4-(2,2,3-trimethylcyclopent-3-en-1-yl)butan-1-ol',
      description: {
        Formula: 'C13H240',
        MW: 'M.W=196.33',
      },
      applications:
        'Very useful for sandalwood reconstitutions;adds soft and creamy effects.',
      specification: {
        Appearance: 'Clear to pale yellow liquid.',
        Odor: 'Woody,sandalwood.',
        SpecificGravity: '0.901-0.907',
        RefractiveIndex: '1.470-1.475',
        FlashPoint: '>100C',
        Purity: 'by GLC Major isomer (% by GLC) Min.90% ~ 100%',
        BoilingPoint: '273C @ 760 mm of HG.',
        sumOfIsomer: '',
      },
      RecommendedUseLevel: '0.5-10%',
      CASNO: 'CAS-NO 72089-08-8',
    },
    {
      chemicalName:
        '2-methyl-4-(2,2,3-Trimethyl-3-Cyclopenten-1-yl) 2-Buten-1-ol',
      description: {
        Formula: 'C13H22O',
        MW: 'M.W=194.3',
      },
      applications:
        'It blends excellently with many materials and compounds,Oriental and Woody compounds. It gives a rich warm sweetness to compounds.',
      specification: {
        Appearance: 'Clear to pale yellow liquid.',
        Odor: 'Powerful Sandalwood odor.',
        SpecificGravity: '0.920 - 0.930',
        RefractiveIndex: '1.483 - 1.493',
        FlashPoint: '>100C',
        Purity: 'by GLC Major isomer (% by GLC) Min. 88% ~ 92%',
        BoilingPoint: ' 280°C @ 760 mm of Hg.',
        sumOfIsomer: 'Min. 96.0%',
      },
      ShelfLife: '2 years',
      CASNO: 'CAS-NO 28219-605',
      AcidValue: 'NOT MORE THAN 1.0',
    },
    {
      chemicalName: '7-HYDROXY-3,7-DIMETHYLOCTANAL',
      description: {
        Formula: 'C10 H20 O2',
        MW: 'M.W=172',
      },
      applications: 'used in a variety of perfumery applications.',
      specification: {
        Appearance: 'Clear slight viscous liquid.',
        Odor: 'Delicate,floral,lily of the valley.',
        Color: 'Colorless',
        Density: '0.919 - 0.926',
        RefractiveIndex: '1.4470 - 1.4500',
        FlashPoint: '113 °C',
        Purity: '>95',
        BoilingPoint: ' 213.00 to 218.00 °C.@ 760 mm of Hg.',
        Solubility: 'Min. 96.0%',
      },
      ShelfLife: '2 years',
      CASNO: 'CAS-NO 107-75-5',
      AcidValue: 'NOT MORE THAN 4',
      StabilityNStorage:
        'KEEP IN TIGHTLY CLOSED CONTAINER IN A COOL AND DRY PLACE, PROTECTED FROM LIGHT. WHEN STORED FOR MORE THAN 24 MONTHS, QUALITY SHOULD BE CHECKED BEFORE USE.',
    },
    {
      chemicalName: '3,7-DIMETHYL-6-OCTEN-1-AL',
      description: {
        Formula: 'C10 H18 O',
        MW: 'M.W=154.00',
      },
      applications:
        'Raw material for industrial use intended for manufacture of flavours and fragrances.',
      specification: {
        // Appearance: 'Clear slight viscous liquid.',
        Odor: 'Citrus, Citronella,Herbal.Rose.',
        Color: 'Colorless to pale yellow',
        Density: '0.845 - 0.861',
        RefractiveIndex: '1.4460-1.4560',
        FlashPoint: '77 °C',
        Purity: '>95',
        BoilingPoint: ' 201°C.',
        Solubility: 'Nearly insoluble water',
      },
      // ShelfLife: '2 years',
      CASNO: 'CAS-NO 106-23-0',
      AcidValue: 'NOT MORE THAN 3',
      StabilityNStorage:
        'KEEP IN TIGHTLY CLOSED CONTAINER IN A COOL AND DRY PLACE, PROTECTED FROM LIGHT. WHEN STORED FOR MORE THAN 24 MONTHS, QUALITY SHOULD BE CHECKED BEFORE USE.',
    },
    {
      chemicalName: '3,7-DIMETHYL-2,6-OCTADIEN-1-YL ACETATE',
      description: {
        Formula: 'C12 H20 O2',
        MW: 'M.W=196.29',
      },
      applications: 'used in a variety of Fragrance & Flavour applications.',
      specification: {
        Appearance: 'Clear mobile liquid.',
        Odor: 'Floral,Rose,Sweet,Frutal.',
        Color: 'Colorless',
        Density: '0.907-0.917',
        RefractiveIndex: '1.4400-1.4500',
        FlashPoint: '111°C',
        Purity: '>97%',
        BoilingPoint: '243°C.@ 760 mm of Hg.',
        Solubility: 'Insoluble in water.',
      },
      RecommendedUseLevel: 'UPTO 30%',
      // ShelfLife: '2 years',
      CASNO: 'CAS-NO 150-87-3',
      // AcidValue: 'NOT MORE THAN 3',
      StabilityNStorage:
        'KEEP IN TIGHTLY CLOSED CONTAINER IN A COOL AND DRY PLACE ,PROTECTED FROM LIGHT.',
    },
    {
      chemicalName: '3,7-Dimethyloct-6-en-1-yl acetate',
      description: {
        Formula: 'C12 H22 O',
        MW: 'M.W=198',
      },
      applications: 'used in a variety of Fragrance & Flavour applications.',
      specification: {
        Appearance: 'Clear mobile liquid.',
        Odor: 'Floral,Fruity.',
        Color: 'Colorless',
        Density: '0.886-0.896',
        RefractiveIndex: '1.4400-1.4500',
        FlashPoint: '112°C',
        Purity: '>96%(SUM OF CITRONELLYL ACETATE & ISOMERS)',
        BoilingPoint: '229°C.@ 760 mm of Hg.',
        Solubility: 'Insoluble in water.',
      },
      RecommendedUseLevel: 'UPTO 40%',
      // ShelfLife: '2 years',
      CASNO: 'CAS-NO 150-84-5',
      // AcidValue: 'NOT MORE THAN 3',
      StabilityNStorage:
        'KEEP IN TIGHTLY CLOSED CONTAINER IN A COOL AND DRY PLACE ,PROTECTED FROM LIGHT.',
    },
    {
      chemicalName: '3,7-dimethyloctan-1-ol',
      description: {
        Formula: 'C10 H22 O ',
        MW: 'M.W=158.284',
      },
      applications: 'used in a variety of perfumery applications.',
      specification: {
        Appearance: 'Clear mobile liquid.',
        Odor: 'Floral, rose, waxy.',
        Color: 'Colorless to pale yellow',
        Density: '0.825-0.835',
        RefractiveIndex: '1.4330 – 1.4380',
        FlashPoint: '104°C',
        Purity: 'DMO> 96; CITRONELLOL < 2; GERANIOL < 0.5',
        BoilingPoint: '213.00 to 218.00 °C.@ 760 mm of Hg.',
        Solubility: 'Insoluble in water.',
      },
      RecommendedUseLevel: 'UPTO 20%',
      // ShelfLife: '2 years',
      CASNO: 'CAS-NO 106-21-8',
      // AcidValue: 'NOT MORE THAN 3',
      // StabilityNStorage: 'KEEP IN TIGHTLY CLOSED CONTAINER IN A COOL AND DRY PLACE ,PROTECTED FROM LIGHT.',
    },
    {
      chemicalName: '1-METHYL-4-ISOPROPENYL CYCLOHEXAN-3-OL',
      description: {
        Formula: 'C10 H18 O  ',
        MW: 'M.W=154.00',
      },
      applications:
        'Raw material for industrial use intended for the manufacture of flavours and/or fragrances.',
      specification: {
        Appearance: 'Clear mobile liquid.',
        Odor: '.MINTY,BITTER-SWEET,FRESH,HERBAL.',
        Color: 'Colorless',
        Taste: 'MINTY,BITTER-SWEET,COOLING,HERBAL',
        // Density: '0.825-0.835',
        // RefractiveIndex: '1.4330 – 1.4380',
        FlashPoint: '90°C',
        Purity: 'As Isomers Sum >97',
        BoilingPoint: '210°C.',
        MeltingPoint: '-10°C.',
        Solubility: 'Insoluble in water.',
      },
      // RecommendedUseLevel: 'UPTO 20%',
      // ShelfLife: '2 years',
      CASNO: 'CAS-NO 89-79-2',
      // AcidValue: 'NOT MORE THAN 3',
      StabilityNStorage:
        'Keep in tightly closed container in a cool and dry place,protected from light,when stored for more than 24 months, quality should be checked before use.',
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openProduct(event: any) {
    let data = this.specs.filter((e: any) => e.CASNO == event?.description);

    this.dialog.open(DialogOverviewExampleDialog, {
      width: '650px',
      data: {
        specs: data[0],
        info: event,
      },
    });
  }
}
