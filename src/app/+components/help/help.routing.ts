/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: HelpComponent }
]);
