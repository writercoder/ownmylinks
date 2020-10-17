#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { OwnmylinksStack } from '../lib/ownmylinks-stack';

const app = new cdk.App();
new OwnmylinksStack(app, 'OwnmylinksStack');
