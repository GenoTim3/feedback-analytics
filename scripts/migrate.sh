#!/usr/bin/env bash
set -e

psql feedback_analytics -f sql/schema/001_create_tables.sql
psql feedback_analytics -f sql/schema/002_indexes.sql
